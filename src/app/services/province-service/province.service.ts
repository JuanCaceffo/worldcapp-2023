import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {ProvinceDTO} from 'src/app/dtos/province.dto'
import {API_URL} from '../config'
import {lastValueFrom} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  constructor(private httpClient: HttpClient) {}

  async getProvinces(): Promise<ProvinceDTO[]> {
    const provinces$ = this.httpClient.get<ProvinceDTO[]>(
      `${API_URL}/provinces`
    )
    return await lastValueFrom(provinces$)
  }
}
