resource "azurerm_container_registry" "acr" {
  name                = "containerRegistryPocITT"
  resource_group_name = azurerm_resource_group.POC-ITT-tfstate.name
  location            = azurerm_resource_group.POC-ITT-tfstate.location
  sku                 = "Basic"
  admin_enabled       = true
}

output "mx" {
  value = azurerm_container_registry.acr.admin_password
  sensitive = true
}