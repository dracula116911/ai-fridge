import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateRecipe = async (ingredients) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `Create a delicious recipe using these ingredients: ${ingredients.join(", ")}. 
  Return the response STRICTLY as a JSON object with this structure:
  {
    "title": "Recipe Name",
    "ingredients": ["item 1", "item 2"],
    "instructions": ["step 1", "step 2"],
    "time": "estimated time",
    "calories": "estimated calories"
  }
  Do not include any markdown formatting like \`\`\`json. Just the raw JSON.`;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });
    const response = result.response;

    const text = await response.text();

    const cleanJson = text.replace(/```json|```/g, "").trim();

    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("Gemini Error :", error);
    throw error;
  }
};
