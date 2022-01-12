import { dbContext } from "../db/DbContext"


class GalaxiesService {

  async getAll(query = {}) {
    const galaxies = await dbContext.Galaxies.find(query).populate('creator', 'name image')
    return galaxies
  }

  async getById(id) {
    const galaxies = await dbContext.galaxies.finById(id).populate('creator', 'name image')
    if (!galaxies) {
      throw new BadRequest('invalid Galaxies Id')
    }
    return galaxies
  }

}

export const galaxiesService = new GalaxiesService()