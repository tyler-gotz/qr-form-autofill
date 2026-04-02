package models

import (
	"time"
)

type Patient struct {
	ID        uint   `gorm:"primaryKey" json:"id"`
	FirstName string `gorm:"not null" json:"firstName"`
	LastName  string `gorm:"not null" json:"lastName"`
	Email     string `gorm:"type:varchar(255);uniqueIndex" json:"email"`
	DOB       string `gorm:"not null" json:"dob"`
	Status    string `json:"status"`

	Token     PrefillToken `gorm:"foreignKey:PatientID" json:"token"`
	CreatedAt time.Time    `json:"createdAt"`
	UpdatedAt time.Time    `json:"updatedAt"`
}
