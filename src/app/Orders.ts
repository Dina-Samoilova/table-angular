interface AssignedTo {
  person_name: string;
  status: string;
}

export interface Data {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: AssignedTo[] | [];
  status: string;
  priority: string;
}

export interface Orders {
  response: {
    data: Data[];
  }
}
