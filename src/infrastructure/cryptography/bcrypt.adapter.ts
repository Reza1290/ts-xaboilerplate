import { hash, compare } from 'bcryptjs';
import type { IHasher } from '../../application/services/i-hasher.service.js';

export class BcryptAdapter implements IHasher {
    private readonly saltRounds = 8;
    
    async hash(plain: string): Promise<string> { 
        return hash(plain, this.saltRounds); 
    }

    async compare(plain: string, hash: string): Promise<boolean> { 
        return compare(plain, hash); 
    }
}