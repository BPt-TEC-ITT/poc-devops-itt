terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }

  #Before use remote backend you have to create a storage account and storage container on azure
  backend "azurerm" {
    resource_group_name  = "POCITT-Initialization"
    storage_account_name = "tfstatefhjm1"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }

}

provider "azurerm" {
  features {}
}