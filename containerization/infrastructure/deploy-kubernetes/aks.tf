
resource "azurerm_kubernetes_cluster" "k8s_cluster" {
  name                = "aks_devop_cluster"
  location            = data.azurerm_resource_group.arg.location
  resource_group_name = data.azurerm_resource_group.arg.name
  dns_prefix          = "aksDevopClusterITT"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_D2_v2"
  }

  identity {
    type = "SystemAssigned"
  }

  tags = {
    Environment = "dev"
  }
}

/*
resource "azurerm_role_assignment" "role_assignment" {
  principal_id                     = azurerm_kubernetes_cluster.k8s_cluster.kubelet_identity[0].object_id
  role_definition_name             = "AcrPull"
  scope                            = data.azurerm_container_registry.poc_registry.id
  skip_service_principal_aad_check = true
}*/

output "client_certificate" {
  value     = azurerm_kubernetes_cluster.k8s_cluster.kube_config.0.client_certificate
  sensitive = true
}

output "kube_config" {
  value = azurerm_kubernetes_cluster.k8s_cluster.kube_config_raw

  sensitive = true
}