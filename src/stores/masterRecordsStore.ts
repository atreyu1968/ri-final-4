import { create } from 'zustand';
import type { Network, Center, ProfessionalFamily, Department, NetworkObjective, CenterObjective } from '../types/masterRecords';
import { mockNetworks, mockCenters, mockFamilies, mockDepartments, mockObjectives } from '../data/mockMasterRecords';
import { mockODS } from '../data/mockODS';
import { mockCenterObjectives } from '../data/mockCenterObjectives';

interface MasterRecordsState {
  networks: Network[];
  centers: Center[];
  families: ProfessionalFamily[];
  departments: Department[];
  objectives: NetworkObjective[];
  centerObjectives: CenterObjective[];
  ods: NetworkObjective[];
  
  initializeStore: () => void;
  setNetworks: (networks: Network[]) => void;
  setCenters: (centers: Center[]) => void;
  setFamilies: (families: ProfessionalFamily[]) => void;
  setDepartments: (departments: Department[]) => void;
  setObjectives: (objectives: NetworkObjective[]) => void;
  setCenterObjectives: (objectives: CenterObjective[]) => void;
  setODS: (ods: NetworkObjective[]) => void;
  
  // ... rest of the store implementation remains the same
}

export const useMasterRecordsStore = create<MasterRecordsState>((set, get) => ({
  networks: [],
  centers: [],
  families: [],
  departments: [],
  objectives: [],
  centerObjectives: [],
  ods: [],
  
  initializeStore: () => {
    set({
      networks: mockNetworks,
      centers: mockCenters,
      families: mockFamilies,
      departments: mockDepartments,
      objectives: mockObjectives,
      centerObjectives: mockCenterObjectives,
      ods: mockODS,
    });
  },

  // ... rest of the implementation remains the same
}));