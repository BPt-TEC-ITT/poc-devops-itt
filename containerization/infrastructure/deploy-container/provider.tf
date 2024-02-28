terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = "POCITT-Initialization"
    storage_account_name = "tfstatepocitt2024"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }

}

provider "azurerm" {
  features {}
}