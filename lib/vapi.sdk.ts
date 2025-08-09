import Vapi from "@vapi-ai/web";

const token = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;
const workflowId = process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID;

if (process.env.NODE_ENV === "development") {
  console.log("🔹 Initializing Vapi (web)...");
  console.log("NEXT_PUBLIC_VAPI_WEB_TOKEN:", token ? "✅ Loaded" : "❌ Missing");
  console.log("NEXT_PUBLIC_VAPI_WORKFLOW_ID:", workflowId || "❌ Missing");
}

if (!token) {
  throw new Error("Missing NEXT_PUBLIC_VAPI_WEB_TOKEN in environment variables.");
}
if (!workflowId) {
  throw new Error("Missing NEXT_PUBLIC_VAPI_WORKFLOW_ID in environment variables.");
}

export const vapi = new Vapi(token);

export const getWorkflowId = (): string => workflowId!;
