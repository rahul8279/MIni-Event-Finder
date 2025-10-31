import { Router } from "express"
import { createEvent, getEventById, getEvents, registerForEvent } from "../controller/event.controller.ts"



const router = Router()

router.route("/createEvent").post(createEvent)
router.route("/getEvents").get(getEvents)
router.route("/getEvent/:id").get(getEventById)
router.route("/register/:id").post(registerForEvent)

export default router;