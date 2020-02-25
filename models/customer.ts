export interface CustomerModel extends Object {
    Call_id: string;
    Domain_id: number;
    Contact_address: string;
    Ipaddress: string;
    IpAdrress_type: number;
    Username: string;
    Password: string;
    AAA: number;
    Registered_date: Date;
    last_update: Date;
    expires: number;
    Request_cseq: number;
    status: number;
    proxy_username: string;
    device_type: string;
    mac_address: string;
}
