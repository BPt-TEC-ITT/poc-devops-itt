provider "azurerm" {
  features {}
}

data "azurerm_container_registry" "poc_registry" {
  name                = "pocDevopsITT"
  resource_group_name = "poc-devops-itt"
}

data "azurerm_resource_group" "arg" {
  name = "poc-devops-itt"
}