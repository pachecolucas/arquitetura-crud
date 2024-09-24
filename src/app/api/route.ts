import OpenAI from "openai";
 
export async function GET() {
    const openai = new OpenAI();
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {"role": "user", "content": "Quantas perguntas como esta devo fazer para gastar 5 centavos de dólar nesta API que estou usando do ChatGPT?"}
        ]
    });
    console.log(completion.choices[0].message)
    return Response.json(({resposta:completion.choices[0].message}))
}