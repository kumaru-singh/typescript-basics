export class CafeManager {
    private static instance: CafeManager;
  
    private constructor() {}
  
    static getInstance(): CafeManager {
      if (!CafeManager.instance) {
        CafeManager.instance = new CafeManager();
      }
      return CafeManager.instance;
    }
  
    announce(msg: string) {
      console.log(`[Manager]: ${msg}`);
    }
  }
  