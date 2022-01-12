import { Auth0Provider } from "@bcwdev/auth0provider"
import { galaxiesService } from "../services/GalaxiesService"
import BaseController from "../utils/BaseController"


export class GalaxiesController extends BaseController {

  constructor() {
    super('api/galaxy')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
    // .use(Auth0Provider.getAuthorizedUserInfo)
    // .post('', this.create)
    // .put('/:id', this.edit)
    // .delete('/:id', this.remove)
  }
  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }

  }

  async getById(req, res, next) {
    try {
      const galaxies = await galaxiesService.getById(req.params.id)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

}