resource "azurerm_container_group" "container-poc-prod" {
  name                = "prod-container-group"
  location            = azurerm_resource_group.rg-container-prod.location
  resource_group_name = azurerm_resource_group.rg-container-prod.name
  dns_name_label      = "prod-poc-devops"
  os_type             = "Linux"

  container {
    name   = "poc-devops-container"
    image  = "containerregistrypocitt.azurecr.io/app-user:${var.application_version}"
    cpu    = "0.5"
    memory = "1.5"
    ports {
      port     = 3000
      protocol = "TCP"
    }
  }

  tags = {
    environment = "prod"
  }
}

resource "azurerm_container_group" "container-poc-test" {
  name                = "test-container-group"
  location            = azurerm_resource_group.rg-container-test.location
  resource_group_name = azurerm_resource_group.rg-container-test.name
  dns_name_label      = "test-poc-devops"
  os_type             = "Linux"

  container {
    name   = "poc-devops-container"
    image  = "containerregistrypocitt.azurecr.io/app-user:${var.application_version}"
    cpu    = "0.5"
    memory = "1.5"
    ports {
      port     = 3000
      protocol = "TCP"
    }
  }

  tags = {
    environment = "test"
  }
}