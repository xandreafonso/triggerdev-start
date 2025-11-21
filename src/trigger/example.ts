import { logger, task, wait } from "@trigger.dev/sdk";

export const helloWorldTask = task({
    id: "hello-world",
    description: "A simple hello world task",
    maxDuration: 300, // 5 mins
    run: async (payload: any, { ctx }) => {
        logger.log("Hello, world!", { payload, ctx });
        
        await wait.for({ seconds: 5 });
        
        return {
            message: "Hello, world! Task completed successfully.",
        }
    },
});