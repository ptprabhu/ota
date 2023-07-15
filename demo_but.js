[
    {
        "status": 1,
        "msg": "Success",
        "details": {
            "api_details": {
                "api_url": "http://106.51.44.118:8020/device_api/emp_entry",
                "api_group": "GET",
                "application_type": "application/json",
                "device_id": "864180050569651",
                "is_loop": 1,
                "require_num": 1,
                "button_api": [
                    {
                        "id": 0,
                        "button_name": "com_error_api",
                        "mode": "special",
                        "api_group": "GET",
                        "api_url": "http://106.51.44.118:8020/device_api/get_ui/864180050569651?type=0"
                    },
                    {
                        "id": 1,
                        "button_name": "A",
                        "mode": "enter"
                    },
                    {
                        "id": 2,
                        "button_name": "B",
                        "mode": "special",
                        "api_url": "http://106.51.44.118:8020/device_api/get_ui/864180050569651?type=1",
                        "api_group": "GET",
                        "conformation": 0,
                        "text1": "   Are You Sure?   ",
                        "position": "00,00",
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
                        "id": 3,
                        "button_name": "C",
                        "mode": "special",
                        "api_url": "http://106.51.44.118:8020/device_api/get_ui/864180050569651?type=2",
                        "api_group": "GET",
                        "conformation": 0,
                        "text1": "   Are You Sure?   ",
                        "position": "00,00",
                        "require_num": 4,
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
                        "mode": "special",
                        "api_url": "http://106.51.44.118:8020/device_api/get_ui/864180050569651?type=3",
                        "api_group": "GET",
                        "conformation": 0,
                        "text1": "   Are You Sure?   ",
                        "position": "00,00",
                        "require_num": 5,
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
                        "api_url": "http://106.51.44.118:8020/device_api/update_process",
                        "api_group": "POST",
                        "conformation": 1,
                        "text1": "   Are You Sure?   ",
                        "position": "00,00",
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
                    "name": "Enter Emp_id:",
                    "type": "string",
                    "key": "emp_id",
                    "mode": 2,
                    "position": "00,00",
                    "value_position": "00,01",
                    "delay": 0,
                    "page": 1
                }
            ]
        }
    }
]