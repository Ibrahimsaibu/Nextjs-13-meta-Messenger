import Redis from 'ioredis';
const redisUrl = process.env.NEXT_PUBLIC_REDIS_URL!
const redis = new Redis(redisUrl)



export default redis


