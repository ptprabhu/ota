[
    {
        "status": 1,
        "msg": "Success",
        "details": {
            "config": {
                "ref_delay": 30,
                "password": "12345",
                "periodicStatus": true,
                "version": 1.05,
                "max_tries": 5,
                "secondary_api": "http://cbe.themaestro.in:3000/api_rentit/device_api/device_data",
                "api_group": "POST",
                "application_type": "application/json",
                "api_call_duration": 300
            },
            "peripherals": [
                {
                    "id": 0,
                    "type": 1,
                    "name": "relay",
                    "total": 1,
                    "status": 1,
                    "data": [
                        {
                            "id": 0,
                            "relay_id": 1,
                            "status": 1
                        }
                    ]
                },
                {
                    "id": 1,
                    "type": 2,
                    "name": "digital_signal",
                    "status": 1,
                    "total": 3,
                    "data": [
                        {
                            "id": 0,
                            "pin_id": 1,
                            "name": "battery_charging"
                        },
                        {
                            "id": 1,
                            "pin_id": 2,
                            "name": "motor_running"
                        },
                        {
                            "id": 2,
                            "pin_id": 3,
                            "name": "other"
                        }
                    ]
                },
                {
                    "id": 2,
                    "type": 3,
                    "name": "RS232",
                    "status": 1,
                    "total": 1,
                    "data": [
                        {
                            "id": 0,
                            "port_id": 1,
                            "type": "avg",
                            "is_trigger": 0
                        }
                    ]
                }
            ],
            "api_details": {
                "api_url": "http://cbe.themaestro.in:3000/api_rentit/device_api/update_process",
                "api_group": "POST",
                "application_type": "application/json",
                "device_id": "864180050624795",
                "is_loop": 0,
                "require_num": 2,
                "button_api": [
                    {
                        "id": 0,
                        "button_name": "com_error_api",
                        "type": 0,
                        "mode": "special",
                        "api_group": "GET",
                        "api_url": "http://cbe.themaestro.in:3000/api_rentit/device_api/get_ui"
                    },
                    {
                        "id": 1,
                        "button_name": "A",
                        "mode": "enter"
                    },
                    {
                        "id": 2,
                        "button_name": "B",
                        "type": 1,
                        "mode": "special",
                        "api_url": "http://cbe.themaestro.in:3000/api_rentit/device_api/work_order_entry",
                        "api_group": "POST",
                        "conformation": 1,
                        "text1": "Are You Sure Start Work?",
                        "position": "00,01",
                        "require_num": 1,
                        "option_count": 2,
                        "options": [
                            {
                                "id": 0,
                                "name": "1->Yes",
                                "position": "00,03",
                                "key": "success_key",
                                "value": 1
                            },
                            {
                                "id": 1,
                                "name": "2->No",
                                "position": "15,03",
                                "key": "success_key",
                                "value": 2
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "button_name": "C",
                        "type": 2,
                        "mode": "special",
                        "api_url": "http://cbe.themaestro.in:3000/api_rentit/device_api/work_order_entry",
                        "api_group": "POST",
                        "conformation": 1,
                        "text1": "Are You Sure Pause Work?",
                        "position": "00,01",
                        "require_num": 2,
                        "option_count": 2,
                        "options": [
                            {
                                "id": 0,
                                "name": "1->Yes",
                                "position": "00,03",
                                "key": "success_key",
                                "value": 1
                            },
                            {
                                "id": 1,
                                "name": "2->No",
                                "position": "15,03",
                                "key": "success_key",
                                "value": 2
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "button_name": "D",
                        "mode": "clear"
                    },
                    {
                        "id": 5,
                        "button_name": "#",
                        "type": 3,
                        "mode": "special",
                        "api_url": "http://cbe.themaestro.in:3000/api_rentit/device_api/work_order_entry",
                        "api_group": "POST",
                        "application_type": "application/json",
                        "conformation": 1,
                        "text1": "Are You Close Work?",
                        "position": "00,01",
                        "require_num": 3,
                        "option_count": 2,
                        "options": [
                            {
                                "id": 0,
                                "name": "1->Yes",
                                "position": "00,03",
                                "key": "success_key",
                                "value": 1
                            },
                            {
                                "id": 1,
                                "name": "2->No",
                                "position": "15,03",
                                "key": "success_key",
                                "value": 2
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "button_name": "*",
                        "mode": "special",
                        "api_url": "http://cbe.themaestro.in:3000/api_rentit/device_api/update_process",
                        "api_group": "POST",
                        "application_type": "application/json",
                        "conformation": 1,
                        "text1": "   Are You Sure?   ",
                        "position": "00,01",
                        "require_num": 6,
                        "option_count": 2,
                        "options": [
                            {
                                "id": 0,
                                "name": "1->Yes",
                                "position": "00,03",
                                "key": "success_key",
                                "value": 1
                            },
                            {
                                "id": 1,
                                "name": "2->No",
                                "position": "15,03",
                                "key": "success_key",
                                "value": 2
                            }
                        ]
                    }
                ]
            },
            "fields": [
                {
                    "id": 0,
                    "name": "Mae emp Il",
                    "type": "string",
                    "key": "emp_name",
                    "mode": 0,
                    "position": "00,00",
                    "value_position": "-10,-10",
                    "delay": 0,
                    "page": 1
                },
                {
                    "id": 1,
                    "name": "101",
                    "type": "string",
                    "key": "emp_id",
                    "mode": 4,
                    "position": "-10,-10",
                    "value_position": "-10,-10",
                    "delay": 0,
                    "page": 1
                },
                {
                    "id": 2,
                    "name": "273",
                    "type": "string",
                    "key": "timer2",
                    "mode": 3,
                    "position": "15,01",
                    "value_position": "-10,-10",
                    "delay": 0,
                    "page": 1
                },
                {
                    "id": 3,
                    "name": "10:27 AM",
                    "type": "string",
                    "key": "timer2",
                    "mode": 0,
                    "position": "00,01",
                    "value_position": "-10,-10",
                    "delay": 0,
                    "page": 1
                },
                {
                    "id": 4,
                    "name": "Start Your Work !",
                    "type": "string",
                    "key": "test",
                    "mode": 0,
                    "position": "00,02",
                    "value_position": "-10,-10",
                    "delay": 0,
                    "page": 1
                }
            ]
        }
    }
]
