package fr.ynov.takata_backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.ynov.takata_backend.dto.BabyFoot_TableDto;
import fr.ynov.takata_backend.generic.GenericController;
import fr.ynov.takata_backend.services.BabyFoot_TableService;

@RestController
@RequestMapping("api/babyfoot_table")
public class BabyFoot_TableController extends GenericController<BabyFoot_TableDto, Long, BabyFoot_TableService> {

	public BabyFoot_TableController(BabyFoot_TableService service) {
		super(service);
		// TODO Auto-generated constructor stub
	}

}
