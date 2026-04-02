package handlers

import (
	"net/http"
	"server/internal/repositories"

	"github.com/gin-gonic/gin"
)

type PatientHandler struct {
	Repo *repositories.PatientRepository
}

func NewPatientHandler(repo *repositories.PatientRepository) *PatientHandler {
	return &PatientHandler{Repo: repo}
}

func (h *PatientHandler) GetPatients(c *gin.Context) {
	patients, err := h.Repo.GetPatients()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, patients)
}

func (h *PatientHandler) GetPatientByToken(c *gin.Context) {
	token := c.Param("token")
	patient, err := h.Repo.GetPatientByToken(token)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, patient)
}
