import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CacheService {
  constructor() {}

  save(key: string, data: any) {
    const expiration = 120 * 60 * 1000;

    const record = {
      value: JSON.stringify(data),
      expiration: new Date().getTime() + expiration,
      hasExpiration: true,
    };
    localStorage.setItem(key, JSON.stringify(record));
  }

  load(key: string) {
    const item = localStorage.getItem(key);
    if (item !== null) {
      const record = JSON.parse(item);
      const now = new Date().getTime();
      if (!record || (record.hasExpiration && record.expiration <= now)) {
        return null;
      } else {
        return JSON.parse(record.value);
      }
    }
    return null;
  }
}
