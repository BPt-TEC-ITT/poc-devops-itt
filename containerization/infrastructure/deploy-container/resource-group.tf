resource "azurerm_resource_group" "rg-container-prod" {
  name     = "prod-RG-Container-POC-ITT"
  location = "eastus"
}

resource "azurerm_resource_group" "rg-container-test" {
  name     = "test-RG-Container-POC-ITT"
  location = "eastus"
}