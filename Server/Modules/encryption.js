import { genSaltSync, hashSync, compareSync } from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const publicAPI = {
  encryptPassword(password) {
    const salt = genSaltSync(SALT_WORK_FACTOR); 
    
    return hashSync(password, salt);
  },
  comparePassword(candidatePassword, storedPassword) {
    
    return compareSync(candidatePassword, storedPassword);
  },
};

export default publicAPI;