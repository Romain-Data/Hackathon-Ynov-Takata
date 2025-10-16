package fr.ynov.takata_backend.services.impl;

import java.util.List;

import org.modelmapper.ModelMapper;

import fr.ynov.takata_backend.dto.BabyFoot_TableDto;
import fr.ynov.takata_backend.entities.BabyFoot_Table;
import fr.ynov.takata_backend.generic.GenericServiceImpl;
import fr.ynov.takata_backend.repositories.BabyFoot_TableRepository;
import fr.ynov.takata_backend.services.BabyFoot_TableService;

public class BabyFoot_TableServiceImpl
		extends GenericServiceImpl<BabyFoot_Table, BabyFoot_TableDto, Long, BabyFoot_TableRepository>
		implements BabyFoot_TableService {

	public BabyFoot_TableServiceImpl(BabyFoot_TableRepository repository, ModelMapper mapper) {
		super(repository, BabyFoot_Table.class, BabyFoot_TableDto.class, mapper);
		// TODO Auto-generated constructor stub
	    }

}
