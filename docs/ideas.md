## To-do

1. Socket implementation for _online_, _delivered_, _typing_, _seen_ features
2. Avatar, Bio and finer but relevant UI features
3. Migrate to SSR+CSR model (Next.js + TypeScript)
4. Raw WebSockets seems a better choice in handing complex logic (might migrate, though socket.io should suffice)
5. Migrate the backend to TypeScript and model the schema requirements in a DB (Zod with Prisma)
6. Authentication and Authorization (In-house/OAuth)
7. Distributed chatting
8. Distributed in memory caching
9. Video Calling with WebRTC
10. Live location sharing
11. MongoDB instance with redis caches for personal and group chats
12. File upload microservice (AWS/some other cloud provider/uppy.js seems a good choice)
13. Chat export and static textual analysis with a FastAPI backend
14. (Ambitious) NLP and sentiment analysis, chat (emoji/text) suggestions based on current mood
15. (Ambitious) End-to-End encryption of chats

## Bottlenecks

1. NLP with Benglish/Hinglish chats
2. Hosting and deployment (AWS too costly, socket in free tier not viable)
