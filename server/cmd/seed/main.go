package main

import (
	"server/internal/db"
	"server/internal/models"
	"server/internal/utils"
	"time"

	"github.com/brianvoe/gofakeit/v6"
)

func main() {
	db.Connect()

	db.DB.Exec("DELETE FROM patients")
	patients := []models.Patient{}

	start := time.Date(1970, 1, 1, 0, 0, 0, 0, time.UTC)
	end := time.Now()

	statuses := []string{"Stable", "Monitoring", "Critical", "Admitted"}
	for range 100 {

		patient := models.Patient{
			FirstName: gofakeit.FirstName(),
			LastName:  gofakeit.LastName(),
			Email:     gofakeit.Email(),
			DOB:       gofakeit.DateRange(start, end).Format("2006-01-02"),
			Status:    gofakeit.RandomString(statuses),
		}

		patients = append(patients, patient)
	}

	for i := range patients {
		db.DB.Create(&patients[i])
		tokenValue, _ := utils.GenerateToken()

		token := models.PrefillToken{
			PatientID: patients[i].ID,
			Token:     tokenValue,
		}

		db.DB.Create(&token)
	}
}
