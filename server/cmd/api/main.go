package main

import (
	"server/internal/db"
	"server/internal/handlers"
	"server/internal/middlewares"
	"server/internal/models"
	"server/internal/repositories"

	"github.com/gin-gonic/gin"
)

func main() {
	db.Connect()
	db.DB.AutoMigrate(
		&models.Patient{},
		&models.PrefillToken{},
	)

	repo := repositories.NewPatientRepository(db.DB)
	handler := handlers.NewPatientHandler(repo)

	router := gin.Default()
	router.Use(middlewares.CORSMiddleware())

	api := router.Group("/api")
	{
		api.GET("/ping", handlers.Ping)
		patients := api.Group("/patients")
		{
			patients.GET("/", handler.GetPatients)
			patients.GET("/:token/qr", handler.GetPatientByToken)
		}
	}

	router.Run("0.0.0.0:4000")
}
