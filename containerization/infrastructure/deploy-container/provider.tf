terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }

  #Before use remote backend you have to create a storage account and storage container on azure
  backend "azurerm" {
    resource_group_name  = "poc-ressource-group"
    storage_account_name = "tfstatepocdevopsitt"
    container_name       = "tfstatetest"
    key                  = "terraform.tfstate"
  }

}

provider "azurerm" {
  features {}
}