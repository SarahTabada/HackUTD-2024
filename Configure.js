/*
Pinata Info

API Key: 9a3a2f77b288f37654c9

API Secret: a25de6843a53b37c3811ff81445c529ed25bbe96d978053762fb4eed2d416040

JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwMjMzOTkyMy0yMWRiLTQyOGUtYmEyNC02MjI0MDA3N2VmMTMiLCJlbWFpbCI6InN0YWJhZGEwNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOWEzYTJmNzdiMjg4ZjM3NjU0YzkiLCJzY29wZWRLZXlTZWNyZXQiOiJhMjVkZTY4NDNhNTNiMzdjMzgxMWZmODE0NDVjNTI5ZWQyNWJiZTk2ZDk3ODA1Mzc2MmZiNGVlZDJkNDE2MDQwIiwiZXhwIjoxNzYzMzM4MTk0fQ.3mzn4m04GPQe0ilUHahzQ3lHZ-gQi_akjnrsA4bQ8LQ

------
Pinata GateWay

JWT: 5dkZJo7FHKQB0nw1PGR952fBSqfZsNYUlOrkspHWGILqJwKGWGKC9pEbasBzOVKR


*/

export const apikey = "9a3a2f77b288f37654c9";
export const apisecret = "a25de6843a53b37c3811ff81445c529ed25bbe96d978053762fb4eed2d416040";
export const gatewayjwt = "5dkZJo7FHKQB0nw1PGR952fBSqfZsNYUlOrkspHWGILqJwKGWGKC9pEbasBzOVKR";
export const ipfsgateway = "amaranth-acceptable-piranha-640";

export const readHeader = {
    "Content-Type": "application/json",
}

export const getHeader = {
    headers: {
        pinata_api_key: apikey,
        pinata_secret_api_key: apisecret,
        
    }
}
