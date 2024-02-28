resource "azurerm_resource_group" "rg-container-prod" {
  name     = "POCITT-PROD"
  location = "eastus"
}

resource "azurerm_resource_group" "rg-container-test" {
  name     = "POCITT-DEV"
  location = "eastus"
}