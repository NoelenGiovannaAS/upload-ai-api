import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { getPromptsRoute } from "./routes/get-all-prompts";
import { postUploadVideo } from "./routes/post-upload-video";
import { postCreateTranscriptionRoute } from "./routes/post-create-transcription";
import { getGenerateAiCompletionRoute } from "./routes/get-generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
  origin:
    "*" /*em produção endereço de one vai estar hospedado nosso frontend"*/,
});

app.register(getPromptsRoute);
app.register(postUploadVideo);
app.register(postCreateTranscriptionRoute);
app.register(getGenerateAiCompletionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!!!");
  });
