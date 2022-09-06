// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ChatroomSubscriptionController from "./chatroom_subscription_controller"
application.register("chatroom-subscription", ChatroomSubscriptionController)

import EditProfileController from "./edit_profile_controller"
application.register("edit-profile", EditProfileController)

import EditTripController from "./edit_trip_controller"
application.register("edit-trip", EditTripController)

import FlatpickrController from "./flatpickr_controller"
application.register("flatpickr", FlatpickrController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MapController from "./map_controller"
application.register("map", MapController)

import NotificationSubscriptionController from "./notification_subscription_controller"
application.register("notification-subscription", NotificationSubscriptionController)

import SaveDatesController from "./save_dates_controller"
application.register("save-dates", SaveDatesController)

import SearchController from "./search_controller"
application.register("search", SearchController)
