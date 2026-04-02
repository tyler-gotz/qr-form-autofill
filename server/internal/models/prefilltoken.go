package models

import "time"

type PrefillToken struct {
	ID        uint   `gorm:"primaryKey" json:"id"`
	PatientID uint   `gorm:"not null;index" json:"patientId"`
	Token     string `gorm:"type:varchar(255);uniqueIndex" json:"token"`

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}
