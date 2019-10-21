import express from 'express';
import competitionService from '../businessLogic/competitionService.js';

const router = express.Router();

/**
 * @swagger
 *
 * /v1/competitions:
 *   get:
 *     description: Get competitions
 *     tags:
 *       - competitions
 *     parameters: []
 *     responses:
 *       200:
 *         description: response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                    id:
 *                        type: number
 *                    name:
 *                        type: string
 *                    description:
 *                        type: string
 *                    deadline_date:
 *                        type: string
 *                    experience:
 *                        type: number
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 */

router.get('/', (req, res, next) => {
    competitionService.getCompetitions(req.query)
    .then((result) => res.json(result))
    .catch((error) => next(error));
});

/**
 * @swagger
 *
 * /v1/competitions/{id}:
 *   get:
 *     description: Get competition by id
 *     tags:
 *       - competitions
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                      type: number
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  deadline_date:
 *                      type: string
 *                  experience:
 *                      type: number
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 */
router.get('/:id', (req, res, next) => {
  competitionService.getCompetitionById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => next(error));
});

/**
 * @swagger
 *
 * /v1/competitions:
 *   post:
 *     description: add competition
 *     tags:
 *       - competitions
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                    type: string
 *                description:
 *                    type: string
 *                deadline_date:
 *                    type: string
 *                experience:
 *                    type: number
 *     responses:
 *       201:
 *         description: added success
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 */
router.post('/', (req, res, next) => {
  competitionService.createCompetition(req.body)
    .then(() => res.status(201).end())
    .catch((error) => next(error));
});

/**
 * @swagger
 *
 * /v1/competitions/{id}:
 *   put:
 *     description: update example
 *     tags:
 *       - competitions
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                    type: string
 *                description:
 *                    type: string
 *                deadline_date:
 *                    type: string
 *                experience:
 *                    type: number
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       204:
 *         description: added success
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 */
router.put('/:id', (req, res, next) => {
  competitionService.updateCompetition(req.params.id, req.body)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});

/**
 * @swagger
 *
 * /v1/competitions/{id}:
 *   delete:
 *     description: delete competition
 *     tags:
 *       - competitions
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       204:
 *         description: delete success
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 */
router.delete('/:id', (req, res, next) => {
  competitionService.deleteCompetition(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});

/**
 * @swagger
 *
 * /v1/competitions/{id}/followers:
 *   get:
 *     description: Get competition followers
 *     tags:
 *       - competitions
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                    type: number
 *                  user_id:
 *                    type: number
 *                  competition_id:
 *                    type: number
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 */
router.get('/:id/followers', (req, res, next) => {
  competitionService.getCompetitionFollowers(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => next(error));
});

/**
 * @swagger
 *
 * /v1/competitions/{id}/followers:
 *   post:
 *     description: add competition followers
 *     tags:
 *       - competitions
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                user_id:
 *                  type: number
 *                competition_id:
 *                  type: number
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       201:
 *         description: added success
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 */

router.post('/:id/followers', (req, res, next) => {
  competitionService.createCompetitionFollower(req.params.id, req.body)
    .then(() => res.status(201).end())
    .catch((error) => next(error));
});

/**
* @swagger
*
* /v1/competitions/{id}/followers/{follower_id}:
*   delete:
*     description: delete competition follower
*     tags:
*       - competitions
*     parameters:
*       - name: id
*         in: path
*         required: true
*         schema:
*           type: number
*       - name: follower_id
*         in: path
*         required: true
*         schema:
*           type: number
*     responses:
*       204:
*         description: delete success
*       401:
*         description: Unauthorized access
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/401'
*       500:
*         description: Server error
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/500'
*/
router.delete('/:id/followers/:follower_id', (req, res, next) => {
  competitionService.deleteCompetitionFollower(req.params.id, req.params.follower_id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});


export default router;
