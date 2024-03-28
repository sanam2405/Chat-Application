## Issues

1. Client on leaving malfunctions (FIXED)
2. URI can be manipulated (FIXED)
3. Same room having multiple users with same name cannot exist => ambiguity (FIXED)
4. User cannot identify itself (FIXED PARTIALLY)

## Modifications

1. Socket implementation for _online_, _delivered_, _typing_, _seen_ features
2. Avatar, Bio and finer but relevant UI features
3. Migrate to a component based UI (Vite + React + TypeScript)
4. Raw WebSockets seems a better choice in handing complex logic (might migrate, though socket.io should suffice)
5. Migrate the backend to TypeScript and model the schema requirements in a DB

## Future scope

1. Authentication and Authorization
2. Distributed chatting
3. Distributed in memory caching
4. Video Calling with WebRTC
5. Live location sharing
6. MongoDB instance with redis caches for personal and group chats
7. File upload microservice (AWS/some other cloud provider)
8. Chat export and static textual analysis with a FastAPI backend
9. (Ambitious) NLP and sentiment analysis, chat (emoji/text) suggestions based on current mood
10. (Ambitious) End-to-End encryption of chats

## Bottlenecks

1. NLP with Benglish/Hinglish chats
2. Hosting and deployment (AWS too costly, socket in free tier not viable)
