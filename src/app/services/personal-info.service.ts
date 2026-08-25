import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalInfoPayload } from '../interfaces/PersonalInfoPayload.interface';


@Injectable({
    providedIn: 'root'
})
export class PersonalInfoService {
    private readonly httpsBaseUrl = 'https://localhost:7288/api';
    private readonly apiPath = '/Petitioner/personal-info';

    constructor(private http: HttpClient) { }

    savePersonalInfo(payload: PersonalInfoPayload): Observable<{ personalInfo: PersonalInfoPayload }> {
        if (!payload.id || payload.id === 0) {
            // If id is not provided or is 0, create a new record
            return this.http.post<{ personalInfo: PersonalInfoPayload }>(this.httpsBaseUrl + this.apiPath, payload);
        }
        return this.http.put<{ personalInfo: PersonalInfoPayload }>(`${this.httpsBaseUrl}${this.apiPath}/${payload.id}`, payload);
    }
}
