package fr.ynov.takata_backend.controllers;

import fr.ynov.takata_backend.dto.BabyFoot_TableDto;
import fr.ynov.takata_backend.generic.GenericController;
import fr.ynov.takata_backend.services.BabyFoot_TableService;

public class BabyFoot_TableController extends GenericController<BabyFoot_TableDto, Long, BabyFoot_TableService> {

	public BabyFoot_TableController(BabyFoot_TableService service) {
		super(service);
		// TODO Auto-generated constructor stub
	}

}
