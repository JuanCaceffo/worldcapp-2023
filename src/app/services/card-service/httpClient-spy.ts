import { mockCardData } from "src/app/mocks/card.mock"
import { API_URL } from "../config"
import { of } from "rxjs"
import { CardSearch } from "src/app/models/searchbar/searchbar"
import { getUserId } from "src/app/helpers/getUserId.helper"

export const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
const filter = new CardSearch()

httpClientSpy.get.withArgs(`${API_URL}/figuritas/intercambiar/${getUserId()}`,{params: filter.httpParams()}).and.returnValue(of(mockCardData))

