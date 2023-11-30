provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "terratest" {
  name     = "terratest-resources"
  location = "eastus"
}

resource "azurerm_service_plan" "terratest" {
  name                = "terratest-sp"
  resource_group_name = azurerm_resource_group.terratest.name
  location            = azurerm_resource_group.terratest.location
  os_type             = "Linux"
  sku_name            = "B1"
}

resource "azurerm_linux_web_app" "terratest" {
  name                = "terratest-webapp"
  resource_group_name = azurerm_resource_group.terratest.name
  location            = azurerm_service_plan.terratest.location
  service_plan_id     = azurerm_service_plan.terratest.id

  site_config {
    application_stack {
        node_version = "18-lts"
    }
  }

  app_settings = {
      "MONGO_URI" = "mongodb+srv://admin:admin@cluster0.fyua0e1.mongodb.net/?retryWrites=true&w=majority"
  }

}
