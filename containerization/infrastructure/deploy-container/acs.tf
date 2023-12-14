# Create Azure Container Instance with devops-app image
resource "azurerm_container_group" "conatainer-poc" {
  name                = "example-container-group"
  location            = data.azurerm_resource_group.arg.location
  resource_group_name = data.azurerm_resource_group.arg.name

  os_type    = "Linux"

  container {
    name   = "poc-devops-container"
    image  = "sngbango/app-poc:0.1"
    cpu    = "0.5"
    memory = "1.5"
    ports {
      port     = 3000
      protocol = "TCP"
    }
  }

  tags = {
    environment = "dev"
  }
}