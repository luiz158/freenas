import cPickle as pickle

from django.utils.translation import ugettext as _

from freenasUI.system.alert import alertPlugins, Alert, BaseAlert
from freenasUI.storage.models import Replication

from lockfile import LockFile

VMWARE_FAILS = '/var/tmp/.vmwaresnap_fails'


class VMWareSnapFailAlert(BaseAlert):

    def run(self):
        try:
            with LockFile(VMWARE_FAILS) as lock:
                with open(VMWARE_FAILS, 'rb') as f:
                    fails = pickle.load(f)
        except:
            return None

        alerts = []
        for snapname, vms in fails.items():
            alerts.append(Alert(
                Alert.WARN,
                _('VMWare snapshot %s failed for the following VMs: %s') % (
                    snapname,
                    ', '.join(vms),
                )
            ))
        return alerts

alertPlugins.register(VMWareSnapFailAlert)
