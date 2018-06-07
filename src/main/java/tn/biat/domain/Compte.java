package tn.biat.domain;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Comptes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Compte {
    @Id
	private String numero;
    
	private String propriotaire;
	private BigDecimal solde ;
	
	@OneToMany(mappedBy="compte")
	private List<Operation> operations;
	
	
	
}
