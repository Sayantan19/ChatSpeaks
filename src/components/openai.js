import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'

dotenv.config();
const configuration = new Configuration({
    organization: "org-rsNxF3070e7jwmtGcajiRzZs",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
