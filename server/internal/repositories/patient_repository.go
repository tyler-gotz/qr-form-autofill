package repositories

import (
	"server/internal/models"

	"gorm.io/gorm"
)

type PatientRepository struct {
	DB *gorm.DB
}

func NewPatientRepository(db *gorm.DB) *PatientRepository {
	return &PatientRepository{DB: db}
}

func (r *PatientRepository) GetPatients() ([]models.Patient, error) {
	var patients []models.Patient
	err := r.DB.Preload("Token").Order("first_name asc").Find(&patients).Error
	return patients, err
}

func (r *PatientRepository) GetPatientByToken(token string) (*models.Patient, error) {
	var tokenRecord models.PrefillToken
	err := r.DB.Where("token = ?", token).First(&tokenRecord).Error
	if err != nil {
		return nil, err
	}

	var patient models.Patient
	err = r.DB.First(&patient, tokenRecord.PatientID).Error
	if err != nil {
		return nil, err
	}
	return &patient, err
}
