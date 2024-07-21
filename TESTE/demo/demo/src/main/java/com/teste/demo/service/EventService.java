package com.teste.demo.service;

import com.teste.demo.dto.EventDTO;
import com.teste.demo.model.Event;
import com.teste.demo.model.Institution;
import com.teste.demo.repository.EventRepository;
import com.teste.demo.repository.InstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;


@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private InstitutionRepository institutionRepository;

    public Event createEvent(EventDTO eventDTO) {
        Event event = new Event();
        event.setName(eventDTO.getEventName());
        event.setStartDate(eventDTO.getStartDate());
        event.setEndDate(eventDTO.getEndDate());
        event.setStatus("inactive");

        Institution institution = institutionRepository.findById(eventDTO.getInstitutionId())
                .orElseThrow(() -> new RuntimeException("Institution not found"));
        event.setInstitution(institution);

        return eventRepository.save(event);
    }

    @Scheduled(cron = "0 0 0 * * ?")
    public void updateEventStatuses() {
        LocalDate today = LocalDate.now();
        List<Event> events = eventRepository.findAll();

        for (Event event : events) {
            if (event.getStartDate().isBefore(today) && event.getEndDate().isAfter(today)) {
                event.setStatus("active");
            } else {
                event.setStatus("inactive");
            }
            eventRepository.save(event);
        }
    }
}
