// Copyright 2020 Orange SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.package apis

package nifi

import (
	"github.com/Orange-OpenSource/nifikop/pkg/resources/templates"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
)

// TODO: To remove ? Or to redo
func (r *Reconciler) lbService() runtime.Object {

	usedPorts := r.generateServicePortForInternalListeners()

	usedPorts = append(usedPorts, r.generateServicePortForExternalListeners()...)
	usedPorts = append(usedPorts, r.generateDefaultServicePort()...)

	return &corev1.Service{
		ObjectMeta: templates.ObjectMetaWithAnnotations(r.NifiCluster.Name, LabelsForNifi(r.NifiCluster.Name),
			r.NifiCluster.Spec.Service.Annotations, r.NifiCluster),
		Spec: corev1.ServiceSpec{
			Type:            corev1.ServiceTypeLoadBalancer,
			SessionAffinity: corev1.ServiceAffinityClientIP,
			Selector:        LabelsForNifi(r.NifiCluster.Name),
			Ports:           usedPorts,
		},
	}
}