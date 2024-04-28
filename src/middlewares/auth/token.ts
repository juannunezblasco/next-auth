'use server';

import { JWTPayload, SignJWT, jwtVerify } from "jose";

const COOKIE_SECRET_KEY = 'nPt1cx%VyphXrz8waX#2*KW%ZoCI1S8oymrv%78Mnr'; // Change this to your own secret key come from .env file
const key = new TextEncoder().encode(COOKIE_SECRET_KEY);

export async function encrypt(payload: JWTPayload, expires: Date) {

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(new Date( expires ))
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload | null> {

  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
    
  } catch (error) {
    return null;
  }
}

