import { PrismaClient } from '.prisma/client';
import * as fs from 'fs';
import { join } from 'path';
import shuffleArray from '../../common/helpers/shuffle-array.helper';
import Question from '../../interfaces/question.interface';
import QuestionFile from "../../interfaces/file.interface"


const prisma = new PrismaClient();
const dataDir = join(__dirname, '../..', 'data');
const fileNames = fs.readdirSync(dataDir);
const files = fileNames.map((file: string) => ({
  name: file.split('.')[0],
  data: JSON.parse(fs.readFileSync(`${dataDir}/${file}`, 'utf8')),
}));
async function main() {
  const result = Promise.all(
    files.map(async (file: QuestionFile) => {
      return await prisma.category.create({
        data: {
          name: file.name,
          questions: {
            create: file.data.map((question: Question) => ({
              content: question.default_size,
              answers: {
                create: shuffleArray([
                  ...question.incorrects,
                  question.correct,
                ]).map((answer: string) => ({
                  content: answer,
                  isCorrect: answer === question.correct,
                  url: question.url,
                })),
              },
            })),
          },
        },
      });
    }),
  );
  await result;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
